import { TestBed } from '@angular/core/testing';
import { CenteredComponent } from './centered.component';
describe('CenteredComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CenteredComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CenteredComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=centered.component.spec.js.map