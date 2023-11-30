import { TestBed } from '@angular/core/testing';
import { IdsCardComponent } from './ids-card.component';
describe('IdsCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsCardComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-card.component.spec.js.map