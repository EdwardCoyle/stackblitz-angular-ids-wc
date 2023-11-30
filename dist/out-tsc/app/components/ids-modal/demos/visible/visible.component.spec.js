import { TestBed } from '@angular/core/testing';
import { VisibleComponent } from './visible.component';
describe('VisibleComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VisibleComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(VisibleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=visible.component.spec.js.map