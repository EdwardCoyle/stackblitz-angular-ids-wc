import { TestBed } from '@angular/core/testing';
import { IdsContainerComponent } from './ids-container.component';
describe('IdsContainerComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsContainerComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-container.component.spec.js.map